//The builder pattern allows you to create different flavors of an object without using a constructor in a class.
//But why, can’t we just use a constructor?
//Well, there is a problem with the constructor in certain scenarios. 

class User{
    firstName:string;
    lastName:string;
    email:string;
    isAdmin:boolean;

    constructor(builder:UserBuilder){
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.email = builder.email;
        this.isAdmin = builder.isAdmin;
    }
}

//Builder Class
class UserBuilder{
    firstName = '';
    lastName = '';
    email = '';
    isAdmin = false;

    setFirstName(name:string): UserBuilder{
        this.firstName = name;
        return this;
    }
    setLastName(lname:string): UserBuilder{
        this.lastName = lname;
        return this;
    }
    setEmail(mail:string): UserBuilder{
        this.email = mail;
        return this;
    }
    setAdmin(flag:boolean): UserBuilder{
        this.isAdmin = flag;
        return this;
    }
    build():User{
        return new User(this)
    }
}
//Usage
const formData = new UserBuilder()
.setFirstName("John")
.setLastName("Paul")
.setEmail("paul412@gmail.com")
.setAdmin(true).build()
console.log(`User records ${JSON.stringify(formData)}`);
