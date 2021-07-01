import { StyleSheet } from 'react-native';

export const OnboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
  },
  continue: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '300',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  flower: {
    marginTop: 400,
  },
  login: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  touches: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: 15,
  },
  high: {
    color: 'white',
    fontSize: 34,
    lineHeight: 50,
    textAlign: 'center',
    fontWeight: '400',
  },
  stay: {
    width: 180,
    marginTop: 30,
  },
  spliff: {
    color: 'white',
    fontSize: 29,
    fontWeight: '500',
    marginTop: 10,
  },
});
