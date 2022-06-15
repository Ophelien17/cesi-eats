.<template>
    <div class="Form">
        <form id="formUser" ref="form" @submit="checkForm" action="http://localhost:5000/api/Users" method="post">
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </p>
            <p>
                <label for="UsersName">Name :</label>
                <input id="UsersName" v-model="UsersName" type="text" name="UsersName">
            </p>
            <p>
                <label for="UsersMail">Mail :</label>
                <input id="UsersMail" v-model="UsersMail" type="mail" name="UsersMail">
            </p>

            <p>
                <label for="UsersPassword">Password :</label>
                <input id="UsersPassword" v-model="UsersPassword" type="password" name="UsersPassword">
            </p>

            <p>
                <label for="Roles">Roles :</label>
                <select id="Roles" v-model="Roles" name="Roles">
                    <option value=1>Client</option>
                    <option value=2>Livreur</option>
                    <option value=3>Restaurateur</option>
                </select>
            </p>
            <input type="hidden" name="DateOfJoining" :value="DateOfJoining" />
            <input type="hidden" name="PhotoFileName" :value="PhotoFileName" />
            <p>
                <input type="submit" value="Submit">
            </p>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'LoginUser',
        data() {
            return {
                errors: [],
                name: null,
                age: null,
                movie: null,
                DateOfJoining: new Date(Date.now()),
                PhotoFileName: "blank.png"
            }
        },
        methods: {

            checkForm: function (e) {

                e.preventDefault();

                this.errors = [];

                if (!this.UsersName) {
                    this.errors.push('Name required.');
                }
                if (!this.UsersMail) {
                    this.errors.push('Mail required.');
                }
                if (!this.UsersPassword) {
                    this.errors.push('Password required.');
                }
                if (!this.Roles) {
                    this.errors.push('Roles required.');
                }
                if (this.UsersName && this.UsersPassword && this.UsersMail && this.Roles) {

                    var today = new Date();
                    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                    this.DateOfJoining = date;
                    this.PhotoFileName = "blank.png";

                    const data = JSON.stringify({
                        UsersName: this.UsersName,
                        UsersPassword: this.UsersPassword,
                        UsersMail: this.UsersMail,
                        Roles: this.Roles,
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
                            console.log(JSON.stringify(response.data));
                        })
                        .catch(function (error) {
                            console.log(error);
                        });


                }
            }
        }
    }
</script>

<style lang="scss">
    .Form {
        margin: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            input {
                margin: 20px;
                width: 200px;
            }

            select {
                margin: 20px;
                width: 200px;
            }
        }
    }
</style>