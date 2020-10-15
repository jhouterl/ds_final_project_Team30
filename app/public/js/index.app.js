var app = new Vue({
  el: '#membersPage',
  data: {
    memberList: [],
    visitList: [],
    activeMember: null,
    triageForm: {
      priority: null,
      symptoms: ''
    },
    newMemberForm: {}
  },
  computed: {
    activePtName() {
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
        certification_id: ""

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
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newMemberForm);

      this.newMemberForm = this.newMemberData();
    },
    handleTriageForm( evt ) {
      console.log("Form submitted!");

      this.triageForm.member = this.activeMember;
      console.log(this.triageForm);

    }
  },
  created() {
    fetch("api/records/")
    .then( response => response.json() )
    .then( json => {
      this.memberList = json;

      console.log(json)}
    );

    fetch("api/visits/")
    .then( response => response.json() )
    .then( json => {
      this.visitList = json;

      console.log(json)}
    );

    this.newPtForm = this.newPtData();
  }
})
