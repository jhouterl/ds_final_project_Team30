var MemberCerts = new Vue({
  el: '#MemberCerts',
  data: {
    memberCertList: [],
    member_certification:{}
  },
  methods: {
    fetchMember() {
      fetch('api/certifications/person_cert_index.php')
      .then(response => response.json())
      .then(json => { MemberCerts.memberCertList = json })
    }},

//    handleDelete() {
//    fetch('api/certifications/deleteMemberCert.php', {
//      method:'POST',
//      body: JSON.stringify(this.member_certification),
//      headers:{
//        "Content-Type": "application/json; charset=utf-8"
//      }
//      })
//      .then( response => response.json() )
//      .then ( json => {MemberCerts.memberCertList = json} )
//      .catch ( err => {
//      console.error('WORK TRIAGE ERROR:');
//      console.error(err);
//      })

  //    this.handleReset();
  //  },

//    handleReset() {
//      this.member_certification = {
//        person_id: '',
//        certification_id: '',
//        expDate: '',
//        renewDate: ''
  //    }
  //  }


//  },
  created() {
    this.fetchMember();
//    this.handleReset();
  }
})
