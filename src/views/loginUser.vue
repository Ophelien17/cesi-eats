.<template>
    <div>
        <v-card class="body">
            <v-responsive :aspect-ratio="16/9">
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="UsersName" :counter="10" :rules="nameRules" label="Name" required>
                    </v-text-field>

                    <v-text-field v-model="UsersMail" :rules="emailRules" label="E-mail" required></v-text-field>

                    <v-text-field v-model="UsersPassword" type="password" label="Password" required></v-text-field>

                    <v-select v-model="Roles" :items="items" item-value="id" item-text="name"
                        :rules="[v => !!v || 'Role is required']" label="Roles" required>
                    </v-select>

                    <v-btn :disabled="!valid" color="success" class="mr-4" @click="SubmitCreate">
                        Validate
                    </v-btn>

                    <v-btn color="error" class="mr-4" @click="reset1">
                        Cancel
                    </v-btn>

                </v-form>

                <v-divider class="mx-4" vertical></v-divider>

                <v-form ref="form2" v-model="valid" lazy-validation>

                    <v-text-field v-model="UsersMail" :rules="emailRules" label="E-mail" required></v-text-field>

                    <v-text-field v-model="UsersPassword" type="password" label="Password" required></v-text-field>

                    <v-btn :disabled="!valid" color="success" class="mr-4" @click="LoginUser">
                        Validate
                    </v-btn>

                    <v-btn color="error" class="mr-4" @click="reset2">
                        Cancel
                    </v-btn>

                </v-form>



            </v-responsive>
        </v-card>

        <v-snackbar
      v-model="snackbar"
    >
      {{ textSnack }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'LoginUser',
        data: () => ({
            valid: true,
            UsersName: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            UsersMail: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            UsersPassword: '',
            DateOfJoining: '',
            PhotoFileName: '',
            Roles: null,
            snackbar: false,
            textSnack:'',
            items: [
                "Client", "Livreur", "Restaurateur"
            ],
        }),
        methods: {
            reset1() {
                this.$refs.form.reset()
            },
            reset2() {
                this.$refs.form2.reset()
            },
            SubmitCreate() {
                var today = new Date();
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                this.DateOfJoining = date;
                this.PhotoFileName = "blank.png";
                var number = 1;
                if (this.Roles == 2) {
                    number = 2;
                }
                if (this.Roles == 3) {
                    number = 3;
                }

                const data = JSON.stringify({
                    UsersName: this.UsersName,
                    UsersPassword: this.UsersPassword,
                    UsersMail: this.UsersMail,
                    Roles: number,
                    DateOfJoining: this.DateOfJoining,
                    PhotoFileName: this.PhotoFileName
                })

                var config = {
                    method: 'post',
                    url: 'http://localhost:5000/api/Users',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: data
                };
                axios(config)
                    .then(function (response) {
                        this.textSnack = "Successfully added User"
                        this.snackbar = false  ;                    
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

        }
    }
</script>

<style lang="scss">
    .body {
        margin: 20px;
        padding: 20px;
    }
</style>