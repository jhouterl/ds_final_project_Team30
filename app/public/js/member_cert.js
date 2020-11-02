var memberCerts = new Vue({
  el: '#memberCerts',
  data: {
    memberCertList: [],
    member_certification:{}
  },
  methods: {
    fetchMemberCertification() {
      fetch('api/certifications/person_cert_index.php')
      .then(response => response.json())
      .then(json => { memberCerts.memberCertList = json })
    }},

  created() {
    this.fetchMemberCertification();
  }
})
