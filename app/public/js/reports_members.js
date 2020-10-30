var memberFilter = new Vue({
  el: '#memberFilter',
  data: {
    memberList: [

    ]
    },
  methods: {
    fetchMembers() {
      fetch('api/details/reports_members.php')
      .then(response => response.json())
      .then(json => { this.memberList = json })
    }
  },

  created() {
    this.fetchMembers();
  }
});
