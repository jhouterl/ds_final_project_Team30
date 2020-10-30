var memberDetails = new Vue({
  el: '#memberDetails',
  data: {
    memberList: [],
    certList:[],
  //  memberContact:[],
    filter: {
      fn: '',
      cert:'',
      sn:'',
      rn:''
    }
    //options: 'Mark'
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
    },

//    fetchMemberContact() {
//      fetch('api/memberContactFolder/')
//      .then(response => response.json())
//      .then(json => { memberDetailApp.memberContact = json })
//    },
//    displayWaitingLocalDate(d) {
//      return moment.utc(d).local().format("YYYY MMM Do");
//    },
//    displayWaitingSince(d) {
  //    return moment.utc(d).local().fromNow();
//    }
//  },
  created() {
    this.fetchMembers();
    this.fetchCertifications();
//    this.fetchMemberContact();
  }
});
