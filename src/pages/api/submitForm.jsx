export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, services, textarea } = req.body;

    console.log("Form Submitted: ", { name, email, services, textarea });

    res.status(200).json({ message: "Form submitted successfully" });
  } else {
    res.status(400).json({ message: "Bad request" });
  }
}
