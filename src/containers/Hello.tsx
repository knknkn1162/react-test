import Hello from '../components/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

// if not, TS1192: Module '"./src/containers/Hello"' has no default export.
// export default connect(mapStateToProps, mapDispatchToProps)(Hello); 
// in ./index.tsx, `import Hello from './containers/Hello';` instead
export const NewHello = connect(mapStateToProps, mapDispatchToProps)(Hello);