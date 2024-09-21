import { 
  View, 
  Text, 
  Image 
} from 'react-native'
import Clipboard from '../../assets/Clipboard.png'

export default function EmptyArea() {
  return (
    <View style={{ 'flex': 1, 'alignItems': 'center', 'gap': 10, marginTop: 70 }}>
      <Image source={Clipboard} />
      <View>
        <Text style={{ 'color': '#808080', 'fontSize': 16 }}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={{ 'color': '#808080', 'fontSize': 16 }}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}
