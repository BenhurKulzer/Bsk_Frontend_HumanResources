import Dashboard from "views/pages/dashboards/Dashboard.jsx";

import Admission from "views/pages/admission/Admission.jsx";
import NewAdmission from "views/pages/admission/NewAdmission.jsx";

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
        path: "/admission-exam",
        name: "Exame Admissional",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/integrate",
        name: "Integração",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/xp",
        name: "Experiência",
        component: Dashboard,
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
        path: "/people",
        name: "Lista de Colaboradores",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/company",
        name: "Lista de Empresas",
        component: Dashboard,
        layout: "/admin"
      }
    ]
  },
  {
    path: "/cc",
    name: "Contra Cheque",
    icon: "far fa-file-alt text-green",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/biometric-point",
    name: "Pontos",
    icon: "fas fa-fingerprint text-black-50",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/messages",
    name: "Mensagens",
    icon: "far fa-comments text-purple",
    component: Dashboard,
    layout: "/admin"
  }
];

export default routes;
