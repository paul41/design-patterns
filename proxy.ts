//Proxy pattern provides a surrogate or placeholder for another object to control and access to it.
//It can be used while lazy loading objects,access control etc.
//In this example, we will fetch sensitive user data from a remote API only when needed.

interface UserI {
  id: number;
  name: string;
  role: string;
}

class UserService {
  getUserData(id: number): UserI {
    console.log(`Fetching user data for user ${id}`);
    return { id, name: "Paul", role: "Admin" };
  }
}

class UserServiceProxy {
  private service: UserService;
  private cache: Record<number, UserI>;

  constructor() {
    this.service = new UserService();
    this.cache = {};
  }

  getUserData(id: number): UserI {
    if (!this.cache[id]) {
      console.log("Proxy: Cache miss, fetching from service.");
      this.cache[id] = this.service.getUserData(id);
    } else {
      console.log("Proxy: Returning cached data.");
    }
    return this.cache[id];
  }
}

// ✅ Usage
const proxy = new UserServiceProxy();
proxy.getUserData(1); // Cache miss
proxy.getUserData(1); // Cached response
