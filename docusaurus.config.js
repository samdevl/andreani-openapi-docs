// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Andreani Developers",
  tagline: "Open Api Docs",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true
        }
      },
      navbar: {
        title: "Open API Docs",
        logo: {
          alt: "Andreani Logo",
          src: "img/andreanilogo.svg"
        },
        items: [
          // Se podría hacer que rediriga a un archivo md, tipo intro.md 
          // y que desde ahi se puedan desplegar las apis
          //{ to: "/docs/category/petstore-api", label: "API", position: "left" },
          /*{
            type: "dropdown",
            label: "API",
            position: "left",
            items: [
              {
                label: "Petstore",
                to: "docs/category/petstore-api",
              }
            ],
          },
         /* {
            label: "Petstore API",
            position: "left",
            to: "/docs/category/petstore-api"
          },
          {
            label: "Petstore API2",
            position: "left",
            to: "/docs/category/petstore2-api"
          },*/
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      /*footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus"
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus"
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog"
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
      }, */
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"]
      }
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          /*petstore: {
            specPath: "examples/petstore.yaml",
            outputDir: "docs/petstore",
            downloadUrl:
              "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },*/
          andreaniAbastecimiento: {
            specPath: "examples/abastecimiento.json",
            outputDir: "docs/Abastecimiento",
          },
          andreaniAltaLote: {
            specPath: "examples/altalote.json",
            outputDir: "docs/Lotes",
          },
          andreaniProductos: {
            specPath: "examples/mantenimientoProductos.json",
            outputDir: "docs/Mantenimiento-Productos",
          },
          andreaniDatosFac: {
            specPath: "examples/facturacion.json",
            outputDir: "docs/Facturacion",
          },
          andreaniEstadoLote: {
            specPath: "examples/estadoLote.json",
            outputDir: "docs/Cambio-Lote",
          },
          andreaniPedidos: {
            specPath: "examples/pedidos.json",
            outputDir: "docs/Pedidos",
          },
          andreaniB2c: {
            specPath: "examples/b2c.json",
            outputDir: "docs/B2C",
          },
          andreaniPrueba: {
            specPath: "examples/prueba.json",
            outputDir: "docs/Prueba-Net",
          },
          petstore: {
            specPath: "examples/petstore.json",
            outputDir: "docs/Petstore",
          },
        }    
      }
    ]
  ],

  themes: ["docusaurus-theme-openapi-docs"]
};

module.exports = config;
