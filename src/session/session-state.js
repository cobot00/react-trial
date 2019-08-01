class SessionState {
  constructor() {
    this.session = {};
    this.authenticated = false;

    this.sessionKey = process.env.REACT_APP_SESSION_KEY || '';
    const session = JSON.parse(localStorage.getItem(this.sessionKey));
    if (session) {
      this.session = session;
      this.authenticated = true;
    }
  }

  login() {
    this.session = {
      sessionToken: 'dummy',
      refreshToken: 'dummy',
      expiredAt: new Date(9999, 11, 31).getTime()
    };
    localStorage.setItem(this.sessionKey, JSON.stringify(this.session));
    this.authenticated = true;
  }

  logout() {
    localStorage.removeItem(this.sessionKey);
    this.session = {};
    this.authenticated = false;
  }
}

export const sessionState = new SessionState();
