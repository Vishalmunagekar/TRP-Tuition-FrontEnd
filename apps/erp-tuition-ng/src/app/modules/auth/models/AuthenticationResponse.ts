export interface AuthenticationResponse {
  jwtToken: string;
  refreshToken: string;
  expiresAt: Date;
  username: string;
}
