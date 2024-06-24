export namespace ApiType {
  export enum StatusCode {
    // 200
    Ok = 200,
    Created = 201,
    Accepted = 202,
    NonAuthoritativeInformation = 203,
    NoContent = 204,

    // 400
    BadRequest = 400,
    Unauthorized = 401,
    PaymentRequired = 402,
    Forbidden = 403,
    NotFound = 404,

    // 500
    InternalServerError = 500,
  }
}
