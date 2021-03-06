var certEdit = new Vue({
  el: '#certEdit',
  data: {
    certList: {}
  },
  methods: {
    editCertification() {
    fetch('api/certifications/cert_edit.php', {
      method:'POST',
      body: JSON.stringify(this.certList),
      headers:{
        "Content-Type": "application/json; charset=utf-8"
      }
      })
      .then( response => response.json() )
      .then ( json => {certApp.certList = json} )
      .catch ( err => {
      console.log("this.certList")
      console.error('error');
      console.error(err);
      })

      this.handlenewForm();
},

handlenewForm() {
  this.certList = {
    certification_id: "",
    certification_name: "",
    certification_agency: "",
    default_expiration_period: ""
  }
}

},
  created() {
    this.handlenewForm();

  }})


function submitMember() {
  window.location.href = "certifications.html";
  }
