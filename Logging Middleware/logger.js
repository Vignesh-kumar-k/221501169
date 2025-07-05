const logger = (eventType, eventDetails) => {
  const timestamp = new Date().toISOString();
  const entry = { eventType, eventDetails, timestamp };

  const existingLogs = JSON.parse(localStorage.getItem("logs") || "[]");
  existingLogs.push(entry);
  localStorage.setItem("logs", JSON.stringify(existingLogs));
};

export default logger;
