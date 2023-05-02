export class SignUpController {
  handle(httpRequest: any): any {
    return {
      statusCode: 400,
      body: new Error('Parâmetro ausente: nome')
    }
  }
}