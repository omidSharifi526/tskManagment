// export interface Person {
//     name: string;
//     country: string;
//   }

type UserInfo = {
    userTenants: any[]; // This could be an array of a specific type, e.g., UserTenant[]
    // Add more properties here if needed
  };

   interface LoginState {
    userPhoneNumber:string
    userInfo: UserInfo
  }
 

  export type {LoginState}