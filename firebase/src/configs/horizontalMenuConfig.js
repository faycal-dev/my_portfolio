import React from "react"
import * as Icon from "react-feather"

const horizontalMenuConfig = [
  {
    id: "Home",
    title: "Home",
    icon: <Icon.Home size={16} />,
    type: "item",
    navLink: "/"
  },
  {
    id: "Skills",
    title: "Skills",
    icon: <Icon.Layers size={16} />,
    type: "item",
    navLink: "/skills"
  },
  {
    id: "Projects",
    title: "Projects",
    icon: <Icon.Code size={16} />,
    type: "item",
    navLink: "/projects"
  },
  {
    id: "About me",
    title: "About me",
    icon: <Icon.User size={16} />,
    type: "item",
    navLink: "/about-me"
  },




  // {
  //   id: "apps",
  //   title: "Apps",
  //   type: "dropdown",
  //   icon: <Icon.Grid size={16} />,
  //   children: [
  //     {
  //       id: "email",
  //       title: "Email",
  //       type: "item",
  //       icon: <Icon.Mail size={16} />,
  //       navLink: "/email/:filter",
  //       filterBase: "/email/inbox",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "chat",
  //       title: "Chat",
  //       type: "item",
  //       icon: <Icon.MessageSquare size={16} />,
  //       navLink: "/chat",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "todo",
  //       title: "Todo",
  //       type: "item",
  //       icon: <Icon.CheckSquare size={16} />,
  //       navLink: "/todo/:filter",
  //       filterBase: "/todo/all",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "calendar",
  //       title: "Calendar",
  //       type: "item",
  //       icon: <Icon.Calendar size={16} />,
  //       navLink: "/calendar",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "eCommerce",
  //       title: "Ecommerce",
  //       type: "dropdown",
  //       icon: <Icon.ShoppingCart size={16} />,
  //       children: [
  //         {
  //           id: "shop",
  //           title: "Shop",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/ecommerce/shop",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "detail",
  //           title: "Product Detail",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/ecommerce/product-detail",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "wishList",
  //           title: "Wish List",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/ecommerce/wishlist",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "checkout",
  //           title: "Checkout",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/ecommerce/checkout",
  //           permissions: ["admin", "editor"]
  //         }
  //       ]
  //     },
  //     {
  //       id: "usersApp",
  //       title: "User",
  //       type: "dropdown",
  //       icon: <Icon.User size={16} />,
  //       children: [
  //         {
  //           id: "userList",
  //           title: "List",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/app/user/list",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "userView",
  //           title: "View",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/app/user/view",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "userEdit",
  //           title: "Edit",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/app/user/edit",
  //           permissions: ["admin", "editor"]
  //         }
  //       ]
  //     }
  //   ]
  // },
 
  // {
  //   id: "forms-tables",
  //   title: "Forms & Tables",
  //   type: "dropdown",
  //   icon: <Icon.Edit3 size={16} />,
  //   children: [
  //     {
  //       id: "formElements",
  //       title: "Form Elements",
  //       type: "dropdown",
  //       icon: <Icon.Copy size={16} />,
  //       children: [
  //         {
  //           id: "select",
  //           title: "Select",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/select",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "switch",
  //           title: "Switch",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/switch",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "checkbox",
  //           title: "Checkbox",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/checkbox",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "radio",
  //           title: "Radio",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/radio",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "input",
  //           title: "Input",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/input",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "inputGroup",
  //           title: "Input Group",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/input-group",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "numberInput",
  //           title: "Number Input",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/number-input",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "textarea",
  //           title: "Textarea",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/textarea",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "date_&_timePicker",
  //           title: "Date & Time Picker",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/pickers",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "inputMask",
  //           title: "Input Mask",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/forms/elements/input-mask",
  //           permissions: ["admin", "editor"]
  //         }
  //       ]
  //     },
  //     {
  //       id: "formLayouts",
  //       title: "Form Layouts",
  //       type: "item",
  //       icon: <Icon.Box size={16} />,
  //       navLink: "/forms/layout/form-layout",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "wizard",
  //       title: "Form Wizard",
  //       type: "item",
  //       icon: <Icon.MoreHorizontal size={16} />,
  //       navLink: "/forms/wizard",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "formik",
  //       title: "Formik",
  //       type: "item",
  //       icon: <Icon.CheckCircle size={16} />,
  //       navLink: "/forms/formik",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "tables",
  //       title: "Tables",
  //       type: "dropdown",
  //       icon: <Icon.Server size={16} />,
  //       children: [
  //         {
  //           id: "tablesReactstrap",
  //           title: "Reactstrap Tables",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/tables/reactstrap",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "reactTables",
  //           title: "React Tables",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/tables/react-tables",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "aggrid",
  //           title: "agGrid Table",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/tables/agGrid",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "dataTable",
  //           title: "DataTables",
  //           type: "item",
  //           icon: <Icon.Circle size={12} />,
  //           permissions: ["admin", "editor"],
  //           navLink: "/tables/data-tables"
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: "pages",
  //   title: "Pages",
  //   type: "dropdown",
  //   icon: <Icon.File size={16} />,
  //   children: [
  //     {
  //       id: "profile",
  //       title: "Profile",
  //       type: "item",
  //       icon: <Icon.User size={16} />,
  //       navLink: "/pages/profile",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "accountSettings",
  //       title: "Account Settings",
  //       type: "item",
  //       icon: <Icon.Settings size={16} />,
  //       navLink: "/pages/account-settings",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "faq",
  //       title: "FAQ",
  //       type: "item",
  //       icon: <Icon.HelpCircle size={16} />,
  //       navLink: "/pages/faq",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "knowledgeBase",
  //       title: "Knowledge Base",
  //       type: "item",
  //       icon: <Icon.Info size={16} />,
  //       navLink: "/pages/knowledge-base",
  //       permissions: ["admin", "editor"],
  //       parentOf: [
  //         "/pages/knowledge-base/category/questions",
  //         "/pages/knowledge-base/category"
  //       ]
  //     },
  //     {
  //       id: "search",
  //       title: "Search",
  //       type: "item",
  //       icon: <Icon.Search size={16} />,
  //       navLink: "/pages/search",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "invoice",
  //       title: "Invoice",
  //       type: "item",
  //       icon: <Icon.File size={16} />,
  //       navLink: "/pages/invoice",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "authentication",
  //       title: "Authentication",
  //       type: "dropdown",
  //       icon: <Icon.Unlock size={16} />,
  //       children: [
  //         {
  //           id: "login",
  //           title: "Login",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/pages/login",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "register",
  //           title: "Register",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/pages/register",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "forgotPassword",
  //           title: "Forgot Password",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/pages/forgot-password",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "resetPassword",
  //           title: "Reset Password",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/pages/reset-password",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "lockScreen",
  //           title: "Lock Screen",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/pages/lock-screen",
  //           permissions: ["admin", "editor"]
  //         }
  //       ]
  //     },
  //     {
  //       id: "miscellaneous",
  //       title: "Miscellaneous",
  //       type: "dropdown",
  //       icon: <Icon.FileText size={16} />,
  //       children: [
  //         {
  //           id: "comingSoon",
  //           title: "Coming Soon",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/misc/coming-soon",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "error",
  //           title: "Error",
  //           type: "dropdown",
  //           icon: <Icon.Circle size={10} />,
  //           children: [
  //             {
  //               id: "404",
  //               title: "404",
  //               type: "item",
  //               icon: <Icon.Circle size={10} />,
  //               navLink: "/misc/error/404",
  //               permissions: ["admin", "editor"]
  //             },
  //             {
  //               id: "500",
  //               title: "500",
  //               type: "item",
  //               icon: <Icon.Circle size={10} />,
  //               navLink: "/misc/error/500",
  //               permissions: ["admin", "editor"]
  //             }
  //           ]
  //         },
  //         {
  //           id: "notAuthorized",
  //           title: "Not Authorized",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/misc/not-authorized",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "maintenance",
  //           title: "Maintenance",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/misc/maintenance",
  //           permissions: ["admin", "editor"]
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: "charts-maps",
  //   title: "Charts & Maps",
  //   type: "dropdown",
  //   icon: <Icon.BarChart2 size={16} />,
  //   children: [
  //     {
  //       id: "charts",
  //       title: "Charts",
  //       type: "dropdown",
  //       badge: "success",
  //       badgeText: "3",
  //       icon: <Icon.PieChart size={16} />,
  //       children: [
  //         {
  //           id: "apex",
  //           title: "Apex",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/charts/apex",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "chartJs",
  //           title: "ChartJS",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/charts/chartjs",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "recharts",
  //           title: "Recharts",
  //           type: "item",
  //           icon: <Icon.Circle size={10} />,
  //           navLink: "/charts/recharts",
  //           permissions: ["admin", "editor"]
  //         }
  //       ]
  //     },
  //     {
  //       id: "leafletMaps",
  //       title: "Leaflet Maps",
  //       icon: <Icon.Map size={16} />,
  //       type: "item",
  //       navLink: "/maps/leaflet",
  //       permissions: ["admin", "editor"]
  //     }
  //   ]
  // },
  // {
  //   id: "others",
  //   title: "Others",
  //   type: "dropdown",
  //   icon: <Icon.MoreHorizontal size={16} />,
  //   children: [
  //     {
  //       id: "menuLevels",
  //       title: "Menu Levels",
  //       icon: <Icon.Menu size={16} />,
  //       type: "dropdown",
  //       children: [
  //         {
  //           id: "secondLevel",
  //           title: "Second Level",
  //           icon: <Icon.Circle size={10} />,
  //           type: "item",
  //           navlink: "",
  //           permissions: ["admin", "editor"]
  //         },
  //         {
  //           id: "secondLevel1",
  //           title: "Second Level",
  //           icon: <Icon.Circle size={10} />,
  //           type: "dropdown",
  //           children: [
  //             {
  //               id: "ThirdLevel",
  //               title: "Third Level",
  //               icon: <Icon.Circle size={10} />,
  //               type: "item",
  //               navLink: "",
  //               permissions: ["admin", "editor"]
  //             },
  //             {
  //               id: "ThirdLevel1",
  //               title: "Third Level",
  //               icon: <Icon.Circle size={10} />,
  //               type: "item",
  //               navLink: "",
  //               permissions: ["admin", "editor"]
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       id: "disabledMenu",
  //       title: "Disabled Menu",
  //       icon: <Icon.EyeOff size={16} />,
  //       type: "item",
  //       navLink: "#",
  //       permissions: ["admin", "editor"],
  //       disabled: true
  //     },
  //     {
  //       id: "documentation",
  //       title: "Documentation",
  //       icon: <Icon.Folder size={16} />,
  //       type: "external-link",
  //       navLink: "google.com",
  //       permissions: ["admin", "editor"]
  //     },
  //     {
  //       id: "raiseSupport",
  //       title: "Raise Support",
  //       icon: <Icon.LifeBuoy size={16} />,
  //       type: "external-link",
  //       newTab: true,
  //       navLink: "https://pixinvent.ticksy.com/",
  //       permissions: ["admin", "editor"]
  //     }
  //   ]
  // }
]

export default horizontalMenuConfig
