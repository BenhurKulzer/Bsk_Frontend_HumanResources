// ##############################
// // // data for populating the calendar in Calendar view
// #############################

var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

const events = [
  {
    id: 1,
    title: "Call with Dave",
    start: new Date(y, m, 1),
    allDay: true,
    className: "bg-red",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 2,
    title: "Lunch meeting",
    start: new Date(y, m, d - 1, 10, 30),
    allDay: true,
    className: "bg-orange",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 3,
    title: "All day conference",
    start: new Date(y, m, d + 7, 12, 0),
    allDay: true,
    className: "bg-green",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 4,
    title: "Meeting with Mary",
    start: new Date(y, m, d - 2),
    allDay: true,
    className: "bg-blue",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 5,
    title: "Winter Hackaton",
    start: new Date(y, m, d + 1, 19, 0),
    allDay: true,
    className: "bg-red",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 6,
    title: "Digital event",
    start: new Date(y, m, 21),
    allDay: true,
    className: "bg-warning",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 7,
    title: "Marketing event",
    start: new Date(y, m, 21),
    allDay: true,
    className: "bg-purple",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 8,
    title: "Dinner with Family",
    start: new Date(y, m, 19),
    allDay: true,
    className: "bg-red",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 9,
    title: "Black Friday",
    start: new Date(y, m, 23),
    allDay: true,
    className: "bg-blue",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },

  {
    id: 10,
    title: "Cyber Week",
    start: new Date(y, m, 2),
    allDay: true,
    className: "bg-yellow",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  }
];

// ##############################
// // // data for populating the calendar in Widgest view
// #############################

const widgetEvents = [
  {
    title: "Lunch meeting",
    start: "2018-11-21",
    end: "2018-11-22",
    className: "bg-orange"
  },
  {
    title: "All day conference",
    start: new Date(y, m - 1, 28),
    allDay: true,
    className: "bg-green"
  },
  {
    title: "Meeting with Mary",
    start: new Date(y, m, 2),
    allDay: true,
    className: "bg-blue"
  },
  {
    title: "Winter Hackaton",
    start: new Date(y, m, 4),
    allDay: true,
    className: "bg-red"
  },
  {
    title: "Digital event",
    start: new Date(y, m, 8),
    end: new Date(y, m, 10),
    allDay: true,
    className: "bg-warning"
  },
  {
    title: "Marketing event",
    start: new Date(y, m, 11),
    allDay: true,
    className: "bg-purple"
  },
  {
    title: "Dinner with Family",
    start: new Date(y, m, 20),
    allDay: true,
    className: "bg-red"
  },
  {
    title: "Black Friday",
    start: new Date(y, m, 24),
    allDay: true,
    className: "bg-blue"
  },
  {
    title: "Cyber Week",
    start: new Date(y, m, 3),
    allDay: true,
    className: "bg-yellow"
  }
];

// ##############################
// // // data for populating the table in ReactTables view
// #############################

const dataTable = [
  {
    name: "Benhur da Silveira Külzer",
    start_date: "29/11/2019 às 14:00:00",
    status_name: "Em Andamento",
    status_percent: "60%",
    actions: "Botão"
  },
  {
    name: "Lucas Guerra",
    start_date: "24/11/2019 às 16:15:11",
    status_name: "Finalizado",
    status_percent: "100%",
    actions: "Botão"
  }
];

export { events, widgetEvents, dataTable };
