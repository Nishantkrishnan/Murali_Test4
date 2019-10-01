const home = {
  items: [
    {
      type: "CardC",
      props: {
        label: "Good work labs",
        horozintalAlign: "left"
      }
    },
    {
      type: "Header",
      props: {
        label: "Technology",
        horozintalAlign: "left"
      }
    },
    {
      type: "CardC",
      props: {
        color: "grey"
      },
      children: {
        items: [
          {
            type: "Cards",
            props: {
              cards: [
                {
                  label: "Java",
                  horizontalAlign: "center",
                  verticalAlign: "center",
                  color: "orange"
                },
                {
                  label: "React",
                  horizontalAlign: "center",
                  verticalAlign: "center",
                  color: "blue"
                },
                {
                  label: "Node",
                  horizontalAlign: "center",
                  verticalAlign: "center",
                  color: "pink"
                }
              ]
            }
          }
        ]
      }
    },
    {
      type: "Header",
      props: {
        label: "Drop Message",
        horozintalAlign: "left"
      }
    },
    {
      type: "CardC",
      props: {
        color: "grey",
        horizontalAlign: "center",
        verticalAlign: "center"
      },
      children: {
        items: [
          {
            type: "TexField",
            props: {
              inputType: "text",
              label: "Name",
              name: "name"
            }
          },
          {
            type: "TexField",
            props: {
              inputType: "email",
              label: "Email",
              name: "email"
            }
          },
          {
            type: "TexField",
            props: {
              inputType: "number",
              label: "Mobile",
              name: "Message"
            }
          },
          {
            type: "Buttons",
            props: {
              label: "Submit"
            }
          }
        ]
      }
    }
  ]
};

export default home;
