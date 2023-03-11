const now = new Date();
const formattedDate = `Update ${now.toLocaleDateString(
  "en-GB"
)} at ${now.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "numeric",
})}`;

export default formattedDate;
