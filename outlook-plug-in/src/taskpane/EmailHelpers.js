

export const getEmailBody = () => {
  return new Promise((resolve, reject) => {
    Office.context.mailbox.item.body.getAsync(Office.CoercionType.Text, (result) => {
      if (result.status === Office.AsyncResultStatus.Succeeded) {
        resolve(result.value);
      } else {
        reject(result.error);
      }
    });
  });
};

export const fetchSummary = async (text) => {
  const response = await fetch("http://localhost:4000/api/summarize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch summary");
  }

  const data = await response.json();
  return data.summary;
};

export const getAttachmentLength = () => {
  return Office.context.mailbox.item.attachments.length;
};
