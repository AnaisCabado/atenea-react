class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 400;

    if (!message) {
      this.message = "Error de validación";
    }
  }
}

/**
 *  authController
 */

class EmailNotFound extends Error{
    constructor(){
        super("El email de usuario no existe");
        this.statusCode = 400;
    }
}
class IncorrectPassword extends Error{
    constructor(){
        super("Contraseña incorrecta");
        this.statusCode = 400;
    }
}
/**
 *  userController
 */
class UserNameNotProvided extends Error {
    constructor(){
        super("Nombre de usuario no introducido");
        this.statusCode = 400;
    }
}

class UserEmailNotProvided extends Error {
    constructor(){
        super("Email no introducido");
        this.statusCode = 400;
    }
}
class UserPasswordNotProvided extends Error {
    constructor(){
        super("Contraseña no introducida");
        this.statusCode = 400;
    }
}
class UserEmailAlreadyExists extends Error{
    constructor(){
        super("Email de usuario ya existe");
        this.statusCode = 400;
    }
}
class UsernameAlreadyExists extends Error{
    constructor(){
        super("Username already exists");
        this.statusCode = 400;
    }
}
class NoUsersFound extends Error {
  constructor() {
    super("No se encuentra este usuario");
    this.statusCode = 404;
  }
}

class UserInvalidCredentials extends Error {
    constructor(){
        super("Credenciales incorrectas");
        this.statusCode = 401;
    }
}
class InvalidUserId extends Error {
  constructor() {
    super("Invalid ID User");
    this.name = "InvalidUserId";
    this.statusCode = 400;
  }
}

class UserNotFound extends Error {
  constructor() {
    super("User not found");
    this.name = "UserNotFound";
    this.statusCode = 404;
  }
}

//authMiddleware
class UnauthorizedError extends Error {
  constructor(message = "No estás autorizado") {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = 401;
  }
}

class TokenExpiredError extends Error {
  constructor(message = "Token expirado") {
    super(message);
    this.name = "TokenExpiredError";
    this.statusCode = 401;
  }
}

class InvalidTokenError extends Error {
  constructor(message = "Token inválido") {
    super(message);
    this.name = "InvalidTokenError";
    this.statusCode = 401;
  }
}

export {
    ValidationError,
    EmailNotFound,
    IncorrectPassword,
    UserNameNotProvided,
    UserEmailNotProvided,
    UserPasswordNotProvided,
    UserEmailAlreadyExists,
    UsernameAlreadyExists,
    UserInvalidCredentials,
    NoUsersFound,
    InvalidUserId,
    UserNotFound,
    UnauthorizedError,
    TokenExpiredError,
    InvalidTokenError
}