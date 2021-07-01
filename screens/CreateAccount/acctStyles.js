import { StyleSheet } from 'react-native';
import * as Colors from '../../common/colors';

export const AccountStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 25,
  },
  already: {
    color: '#81AA66',
  },
  member: {
    flexDirection: 'row',
    marginTop: 30,
    alignSelf: 'center',
  },
  acct: {
    fontWeight: 'bold',
    color: 'white',
  },
  account: {
    backgroundColor: '#81AA66',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  terms: {
    color: 'grey',
    fontSize: 13,
  },
  checkBox: {
    width: 25,
    height: 25,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    width: '100%',
  },
  create: {
    fontSize: 36,
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 45,
    width: 200,
    marginTop: 25,
    fontWeight: '300',
    color: Colors.Black,
    letterSpacing: 0.7,
    marginBottom: 20,
  },
  spliff: {
    color: Colors.Green,
    fontSize: 23,
    fontWeight: '500',
    alignSelf: 'center',
  },
  flower: {
    marginTop: 80,
    color: '#81AA66',
    alignSelf: 'center',
  },
});
