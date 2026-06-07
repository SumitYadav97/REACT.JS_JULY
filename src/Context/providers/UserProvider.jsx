import { useState } from 'react';
import { UserContext } from "../Context";
const UserProvider = ({ children }) => {
const [userContextValue, setUserContextValue] = useState({
userid: "INDI001"
,
username: "Rakesh"
,
birthdate: "6th Jan, 2005"
,
});
return (
<UserContext.Provider value={{ userContextValue, setUserContextValue }}>
{children}
</UserContext.Provider>
);
};
export default UserProvider;