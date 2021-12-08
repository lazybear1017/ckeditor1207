import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledDocumentEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { Button } from "antd";

class App extends React.Component {
  state = {};
  myEdi = undefined;

  finddemo = () => {
    console.log(this.myEdi);
    // this.myEdi.execute("find", "1");
    this.myEdi.execute("fontSize", { value: "big" });
  };

  demofunc = () => {
    console.log(this.myEdi);
    this.myEdi.execute("fontSize", { value: "60px" });
  };

  render() {
    return (
      <div className="App">
        <h2>Using CKEditor 5 build in React</h2>
        <Button type="primary" onClick={this.finddemo}>
          查找
        </Button>
        <Button type="primary" onClick={this.demofunc}>
          测试
        </Button>
        <CKEditor
          config={{}}
          editor={DecoupledDocumentEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            window.myEdi = editor;
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
            this.myEdi = editor;
            editor.ui
              .getEditableElement()
              .parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
              );
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log(data);
            // console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            // console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            // console.log("Focus.", editor);
          }}
        />
      </div>
    );
  }
}

export default App;
