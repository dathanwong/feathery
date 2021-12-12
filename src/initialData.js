const initialData = {
  id: "ladskjf-asldkfj-2lkjadf234",
  name: "Sign Up Page",
  columns: 2,
  rows: 4,
  components: [
    {
      type: "textBox",
      text: "Sign Up",
      alignment: "center",
      fontSize: "12"
    },
    null,
    {
      type: "textField",
      placeholder: "First Name",
      alignment: "center",
      fontSize: "12"
    },
    {
      type: "textField",
      placeholder: "Last Name",
      alignment: "center",
      fontSize: "12"
    },
    {
      type: "textField",
      placeholder: "Email Address",
      alignment: "center",
      fontSize: "12"
    },
    {
      type: "textField",
      placeholder: "Phone Number",
      alignment: "center",
      fontSize: "12",
      textType: "phone"
    },
    {
      type: "button",
      text: "Submit",
      alignment: "center",
      fontSize: "12",
      onClick: {}
    },
    null
  ]
}

export default initialData;