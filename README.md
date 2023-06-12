# Andreani Open Api Template

This site serves as a guide to andreani developers who may want to integrate with the platform.

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


### How it works

To add new docs edit the docusaurus.config adding the new id of the doc you want to generate .mdx file in the section plugin docusaurus-plugin-openapi-docs 

 prueba2: {
            specPath: "examples/prueba2openapi.json",
            outputDir: "docs/prueba2",
          },

Generate the docs using follow command: 
```bash
yarn docusaurus gen-api-docs all 
```
Or use this command to generate just one 

```bash
yarn docusaurus gen-api-docs prueba2
```

To start using docker simply run: 

```bash
sudo docker run -p 3000:3000 docs:dev 
```
If you do some changes in the project remember to run this command to build the images with the new changes (The "." dot at the means that you are inside the folder, otherwise you have to specify the route)

```bash
sudo docker build --target development -t docs:dev .
```



# andreani-docs
