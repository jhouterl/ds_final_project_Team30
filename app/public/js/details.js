var memberDetails = new Vue({
  el: '#memberDetails',
  data: {
    memberList: [],
    certList:[],
    choose: {
      certification:''
    }
  },
  methods: {
    fetchMembers() {
      fetch('api/details/index.php')
      .then(response => response.json())
      .then(json => { memberDetails.memberList = json })
    },

    fetchCertifications() {
      fetch('api/details/cert_index.php')
      .then(response => response.json())
      .then(json => { memberDetails.certList = json })
    }
  },

  created() {
    this.fetchMembers();
    this.fetchCertifications();
  }
});
