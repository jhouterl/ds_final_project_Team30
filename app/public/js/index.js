var app = new Vue({
  el: '#membersPage',
  data: {
    memberList: [],
    visitList: [],
    activeMember: null,
    triageForm: {},
    newMemberForm: {}
  },
  computed: {
    activeMemberName() {
      return this.activeMember ? this.activeMember.last_name + ', ' + this.activeMember.first_name : ''
    }
  },
  methods: {
    newMemberData() {
      return {
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
//        isactive: ""
      }
    },
    handleNewMemberForm( evt ) {
      // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

      // TODO: Validate the data!

      fetch('api/records/post.php', {
        method:'POST',
        body: JSON.stringify(this.newMemberForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.memberList.push(json[0]);
        this.newMemberForm = this.newMemberData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newMemberForm);
    }
  },
  created() {
    fetch("api/records/")
    .then( response => response.json() )
    .then( json => {
      this.memberList = json;

      console.log(json)}
    );

    this.newMemberForm = this.newMemberData();
  }
})
