const USERS_KEY = "algoarena_users";
const CURRENT_USER_KEY = "algoarena_currentUser";

export function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}

export function getCurrentUser() {
  const email = localStorage.getItem(CURRENT_USER_KEY);

  if (!email) {
    return null;
  }

  return getUsers().find((user) => user.email === email) || null;
}

export function signupUser(name, email, password) {
  const users = getUsers();

  const existingUser = users.find(
    (user) => user.email === email
  );

  if (existingUser) {
    return {
      success: false,
      message: "Email already registered.",
    };
  }

  const newUser = {
    name,
    email,
    password,

    progress: {
      currentStreak: 0,
      totalXP: 0,
      accuracy: 0,
      skills: {
        Arrays: 0,
        Strings: 0,
        "Linked Lists": 0,
        Trees: 0,
        "Dynamic Programming": 0,
      },
    },
  };

  users.push(newUser);

  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  localStorage.setItem(CURRENT_USER_KEY, email);

  return { success: true };
}

export function loginUser(email, password) {
  const users = getUsers();

  const user = users.find(
    (item) => item.email === email && item.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  localStorage.setItem(CURRENT_USER_KEY, email);

  return { success: true };
}

export function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}