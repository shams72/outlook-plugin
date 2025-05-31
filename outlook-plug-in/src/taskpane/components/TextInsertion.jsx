import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { getEmailBody, fetchSummary, getAttachmentLength } from "../EmailHelpers";

const TextInsertion = () => {
  const attachmentAmount = useRef(0);
  const body = useRef("");
  const [render, setRender] = useState(0);

  useEffect(() => {
    const run = async () => {
      await Office.onReady();
      const currentBody = await getEmailBody();
      body.current = await fetchSummary(currentBody);
      attachmentAmount.current = getAttachmentLength();
      setRender((r) => r + 1);
    };

    run();
  }, []);

  return (
    <div>
      <h4 style={{ margin: 0 }}>👋 Hello and welcome to our Email Summarizer!</h4>
      <p>
        📧 This email contains {attachmentAmount.current} attachments.
      </p>
      <p>📧 Here is a brief Summary of your Email:</p>
      <p style={{ marginLeft: 20,  animation: "fadeIn 2s forwards",  animationDelay: "0.5s", }}>{body.current}</p>
    </div>
  );
};

export default TextInsertion;
