var memberEdit = new Vue({
  el: '#memberEdit',
  data: {
   memberList: {}
 },

  methods: {
    editMember() {
      fetch('api/records/edit.php', {
        method:'POST',
        body: JSON.stringify(this.memberList),
        headers:{
          "Content-Type": "application/json; charset=utf-8"
}
})

  .then( response => response.json() )
  .then ( json => {membersPage.memberList = json} )
  .catch ( err => {
    console.log("this.memberList")
    console.error('error');
    console.error(err);

})

this.handlenewForm();

},
handlenewForm() {
  this.memberList = {
    person_id: "",
    first_name: "",
    last_name: "",
    gender: "",
    street_address: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    radio_number: "",
    station_num: "",
    position_name: "",
    email: ""

}

}

},

 created() {

 this.handlenewForm();


 }
});

function submitMember() {
window.location.href = "view_members.html"

}
