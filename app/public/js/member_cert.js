var MemberCerts = new Vue({
  el: '#MemberCerts',
  data: {
    memberCertList: [],
    member_certification:{}
  },
  methods: {
    fetchMemberCertification() {
      fetch('api/certifications/person_cert_index.php')
      .then(response => response.json())
      .then(json => { MemberCerts.memberCertList = json })
    }},

  created() {
    this.fetchMemberCertification();
//    this.handleReset();
  }
})
