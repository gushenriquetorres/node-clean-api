import { SignUpController } from './SignUpController'

describe('SignUp Controller', () => {
  test('Deve retornar 400 se nenhum nome for informado', () => {
    const sut = new SignUpController()
    const httpRequest = {
      email: 'any_email@mail.com',
      password: 'any_password',
      passwordConfirmation: 'any_password' 
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
