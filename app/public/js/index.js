var membersPage = new Vue({
  el: '#membersPage',
  data: {
    memberList: [],
//    activeMember: null,
    newMember: {}
  },

  methods: {
    addMember() {
      fetch('api/records/post.php', {
        method:'POST',
        body: JSON.stringify(this.newMember),
        headers:{
          "Content-Type": "application/json; charset=utf-8"
        }
    })
      .then( response => response.json() )
      .then ( json => {membersPage.memberList = json} )
      .catch ( err => {
        console.error('error');
        console.error(err);
    })
    },
    fetchMembers() {
      fetch('api/records/index.php')
      .then(response => response.json())
      .then(json => { membersPage.memberList = json })
    },

      deleteMember() {
        fetch('api/records/delete.php', {
          method:'POST',
          body: JSON.stringify(this.newMember),
          headers:{
            "Content-Type": "application/json; charset=utf-8"
      }
      })
        .then( response => response.json() )
        .then ( json => {membersPage.memberList = json} )
        .catch ( err => {
          console.error('error');
          console.error(err);
    })
          this.handlenewForm();
    },

    handlenewForm() {
      this.newMember = {
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

  //  this.newMember = this.newMemberData();
      this.fetchMembers();
      this.handlenewForm();

    }})

function submitMember() {
  window.location.href = "view_members.html";
  }
