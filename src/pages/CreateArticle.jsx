import JoditEditor from "jodit-react";
import React, { useMemo, useRef, useState } from "react";
import "jodit/es2021/jodit.min.css";
import axios from "axios";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [image, setImage] = useState(null);

  const editor = useRef(null);
  const [content, setContent] = useState("<p>Insert your text...</p>");
  const [color, setColor] = useState("#0dff00");
  const [padding, setPadding] = useState(10);

  const config = useMemo(
    () => ({
      readOnly: false,
      height: 400,
      toolbarSticky: true,
      enableDragAndDropFileToEditor: true,

      extraButtons: [
        {
          name: "Wrap",
          tooltip: "Wrap in Section",
          exec: (editorInstance) => {
            const selection = editorInstance.selection;
            if (!selection) return;
            const selectedHtml = selection.html || "";

            const wrappedElement = `<section style="background-color: ${color}; padding: ${padding}px;">${selectedHtml}</section>`;

            editorInstance.s.insertHTML(wrappedElement);
          },
          iconURL: "",
        },
      ],

      uploader: {
        insertImageBase64URI: true,
      },
    }),
    [color, padding],
  );

  const handlImage = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("upload_preset", "ml_default");
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/upload",
        formData,
      );
      return res.data.url;
    } catch (error) {
      console.error("Image upload failed", error);
      return null;
    }
  };

  const saveAndPostContent = async () => {
    const uploadedImageUrl = await handlImage();

    axios
      .post(
        "http://localhost:3000/api/v1/blog/create",
        {
          title,
          description,
          image: uploadedImageUrl, // use the actual uploaded URL
          content,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": JSON.parse(localStorage.getItem("token")),
          },
        },
      )
      .then((res) => console.log("Blog created:", res.data))
      .catch((err) => console.error(err));
  };

  return (
    <section className="flex flex-col h-fit w-full px-10 py-12 gap-10">
      <h1 className="text-2xl font-bold">Create your blog:</h1>
      <div className="flex flex-col gap-6 w-fit">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-semibold">
            Title*:
          </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="w-120 py-2 px-4 border border-gray-300 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-semibold">
            description*:
          </label>
          <input
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            className="w-120 py-2 px-4 border border-gray-300 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-semibold">
            Header image*:
          </label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-120 py-2 px-4 border border-gray-300 outline-none"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center bg-[#F9F9F9] py-2 px-4">
          <label>
            Background color:{" "}
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
          <label style={{ marginLeft: "20px" }}>
            Padding (px):{" "}
            <input
              type="number"
              value={padding}
              onChange={(e) => setPadding(e.target.value)}
            />
          </label>
        </div>

        <JoditEditor
          ref={editor}
          config={config}
          value={content}
          tabIndex={1}
          onChange={(newContent) => setContent(newContent)}
        />
      </div>

      <button style={{ marginTop: "10px" }} onClick={saveAndPostContent}>
        save
      </button>
    </section>
  );
};

export default CreateArticle;
