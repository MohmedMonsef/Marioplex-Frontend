module.exports = {
    // set your styleguidist configuration here
    title: "Marioplex Documentation",
    sections: [
      {
        name: "Views",
        description: "Documentation for the views",
        components: ["src/views/*.vue"]
      },
  
      {
        name: "Components",
        description: "Documentation for the components",
        components: ["src/components/*.vue"]
      },
      {
        name: "Helpers",
        description: "Documentation for global helper functions",
        components: ["src/javascript/*.js"]
      }
    ],
    theme: {
      color: {
        base: "black"
      }
    },
    exampleMode: "expand"
  };