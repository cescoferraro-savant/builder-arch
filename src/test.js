import React from "react";
import rangeParser from "parse-numeric-range";
import { Highlight, themes } from "prism-react-renderer";

const calculateLinesToHighlight = (raw) => {
  const lineNumbers = rangeParser(raw);
  if (lineNumbers) {
    return (index) => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};

const copyToClipboard = (str) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(str).then(
      function () {
        console.log("Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  } else if (window.clipboardData) {
    // Internet Explorer
    window.clipboardData.setData("Text", str);
  }
};

export const Code = (props) => {
  const [isCopied, setIsCopied] = React.useState(false);
  // const className = props.className || "";
  const code = props.children;
  const language = props.language;
  const file = props.file;
  const highlights = calculateLinesToHighlight(props.highlights || "");
  return (
    <div
      style={{
        background: "#011627",
        borderRadius: "0.5rem",
        // marginTop: "2rem",
        // marginBottom: "2rem",
        paddingLeft: "1.5rem",
      }}
    >
      <div style={{ display: "flex", position: "relative" }}>
        <div
          style={{
            background: "#ffffff",
            marginRight: "1rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            textTransform: "uppercase",
            borderBottomLeftRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#5b5b5b",
            }}
          >
            {language}
          </span>
        </div>
        <div
          style={{
            color: "#9d9d9d",
            fontFamily: "Montserrat",
            fontStyle: "italic",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {file && `${file}`}
        </div>
        <div style={{ flexGrow: "1" }}></div>
        <button
          onClick={() => {
            copyToClipboard(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1000);
          }}
          style={{
            marginRight: "1.5rem",
            marginTop: "0.5rem",
            padding: "8px 12px",
            background: "#00f5c426",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#E2E8F0",
            fontSize: "14px",
            fontFamily: "sans-serif",
            lineHeight: "1",
          }}
        >
          {isCopied ? "🎉 Copied!" : "Copy"}
        </button>
      </div>
      <div
        style={{
          overflow: "auto",
          background: "#011627",
          borderRadius: "0.5rem",
        }}
      >
        <Highlight code={code} language={"javascript"} theme={themes.okaidia}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => {
            console.log(tokens);
            return (
              <pre
                className={className}
                style={{
                  ...style,
                  backgroundColor: "transparent",
                  float: "left",
                  minWidth: "100%",
                }}
              >
                {tokens.map((line, i) => {
                  return (
                    <div
                      {...getLineProps({ line, key: i })}
                      style={{
                        background: highlights(i) ? "#00f5c426" : "transparent",
                        display: "block",
                        fontSize: 20,
                      }}
                    >
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  );
                })}
              </pre>
            );
          }}
        </Highlight>
      </div>
    </div>
  );
};
