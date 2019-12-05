import Dashboard from "views/pages/dashboards/Dashboard.jsx";

import Admission from "views/pages/admission/Admission.jsx";
import NewAdmission from "views/pages/admission/NewAdmission.jsx";

import Buttons from "views/pages/components/Buttons.jsx";
import Cards from "views/pages/components/Cards.jsx";
import Login from "views/pages/examples/Login.jsx";
import Pricing from "views/pages/examples/Pricing.jsx";
import Profile from "views/pages/examples/Profile.jsx";
import Widgets from "views/pages/Widgets.jsx";

const routes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "fas fa-home text-primary",
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Admissões",
    icon: "fas fa-user-friends text-primary",
    state: "admissionCollapse",
    views: [
      {
        path: "/admission",
        name: "Processos de Admissão",
        component: Admission,
        layout: "/admin"
      },
      {
        path: "/new-admission",
        name: "Novo Colaborador",
        component: NewAdmission,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Pós-Admissional",
    icon: "ni ni-ungroup text-orange",
    state: "posCollapse",
    views: [
      {
        path: "/pricing",
        name: "Exame Admissional",
        component: Pricing,
        layout: "/auth"
      },
      {
        path: "/login",
        name: "Integração",
        component: Login,
        layout: "/auth"
      },
      {
        path: "/profile",
        name: "Experiência",
        component: Profile,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Profissional",
    icon: "ni ni-ui-04 text-info",
    state: "componentsCollapse",
    views: [
      {
        path: "/buttons",
        name: "Lista de Colaboradores",
        component: Buttons,
        layout: "/admin"
      },
      {
        path: "/cards",
        name: "Lista de Empresas",
        component: Cards,
        layout: "/admin"
      }
    ]
  },
  {
    path: "/widgets",
    name: "Contra Cheque",
    icon: "far fa-file-alt text-green",
    component: Widgets,
    layout: "/admin"
  },
  {
    path: "/widgets",
    name: "Pontos",
    icon: "fas fa-fingerprint text-black-50",
    component: Widgets,
    layout: "/admin"
  },
  {
    path: "/widgets",
    name: "Mensagens",
    icon: "far fa-comments text-purple",
    component: Widgets,
    layout: "/admin"
  }
];

export default routes;
