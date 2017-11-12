# Security
  ## 개념
  
   ### 단방향 해시 함수
    - 수학적인 연산을 통해 원본 메시지를 변환하여 암호화된 Digest를 생성 
    - 원본 메시지를 알면 암호화된 메시지를 구하기는 쉽지만 암호화된 메시지로는 원본 메시지를 구할 수 없어야 함
    - 입력 값의 일부가 변경되었을 때 Digest가 완전히 달라져야 함
    - Recognizability issue: 공격자가 전처리된 Digest를 많이 확보한 다음 이를 탈취한 다이제스와 비교해 원본 메세지를 찾을 수 있음(rainbow attack)
    - Speed issue: 해시 함수의 빠른 처리속도로 인해 공격자는 매우 빠른 속도로 임의의 문자열을 다이제스와 비교할 수 있음
     
   ### 단방향 해시 함수 보완
    - salt: 단방향 해시 함수에서 다이제스를 생성할 때 추가되는 바이트 단위의 임의의 문자열
    - salting: 원본 메세지에 문자열을 추가하여 다이제스를 생성
    - 사용자별로 다른 솔트를 사용하면 동일한 패스워드를 사용하는 사용자의 다이제스트가 다르게 생성됨
    - key stretching: 해시 함수로 암호화한 다이제스를 다시 해시 함수에 입력하는 과정을 반복하여 암호화에 일정 시간이 소요되게 함
    
 * 자신만의 암호화 시스템을 구현할 경우 취약점 확인이 어려우므로 기존에 검증된 암호화 라이브러리를 사용할 것
 
    ### key derivation functions
     - PBKDF2: digest = PBKDF2(PRF, Passrod, Salt, c, DLen)
         (PRF: 난수, c: iteration 반복 수, DLen: 다이제스트 길이)
      - bcrypt: 1999년 발표되어 현재까지 사용되는 가장 강력한 해시 메커니즘 중 하나. 입력값은 72bytes로 제한
      - scrypt: bcrypt와 유사 PBKDF2나 bcrypt보다 우수함
      
 * 출처 http://d2.naver.com/helloworld/318732

 
 ## 실습
   ### SpringSecurity 적용
   - compile('org.springframework.security:spring-security-core:4.2.3.RELEASE')
   - compile('org.springframework.security:spring-security-web:4.2.3.RELEASE')
   - compile('org.springframework.security:spring-security-config:4.2.3.RELEASE')
   - security access control
   >> http.headers().frameOptions().disable()

   ### BCrypt 적용
   - compile("org.springframework.boot:spring-boot-starter-security")
   - WebSecurityConfig extends WebSecurityConfigureAdapter class에 Bean 등록
   > @Bean
   > public BCryptPasswordEncoder passwordEncoder() {
   >    return new BCryptEnCoder();
   > }
    