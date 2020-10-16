var app = new Vue({
  el: '#membersPage',
  data:{
    members: [],
    newMember: {
      first_name:'',
      last_name:'',
      gender: '',
      street_address: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      email: '',
      radio_number: '',
      station_num: '',
      position_name: '',
      isactive: ''
    }
  },
  methods:{
    fetchMember(){
      fetch('api/records/')
      .then(response => response.json())
      .then(json => {
        this.members = json;
        console.log(this.members);
      });
    },
    createMember(){
    //    this.newMember = this.newMember.first_name;
        fetch('api/records/post.php', {
          method:'POST',
          body: JSON.stringify(this.newMember),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.members.push(json[0]);
          this.newMember = this.newMemberData();
        });
        console.log("Creating (POSTing)...!");
        console.log(this.newMember);
      },
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
          email: "",
          radio_number: "",
          station_num: "",
          position_name: "",
          isactive: ""
        }
      }
  },
  created(){
    this.fetchMember();

  }
});
