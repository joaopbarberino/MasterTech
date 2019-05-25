class Bolo:
    def __init__(self, sabor, qtde_ovos, qtde_andares):
        self.sabor = sabor
        self.qtde_ovos = qtde_ovos
        self.qtde_andares = qtde_andares
        formato = 'redondo'

    def assar(self):
        print('O bolo está assando')

    def bolo_de_chocolate(self, qtde_andares):
        self.sabor = 'chocolate'
        self.qtde_andares = qtde_andares
        print('Bolo de ', self.sabor,' com ', self.qtde_andares, 'andares.')


obj_bolo = Bolo('chocolate', 3, 5)
obj_bolo.bolo_de_chocolate(3)
obj_bolo.assar()

class Animal:
    def __init__(self, nome, dono):
        self.nome = nome
        self.dono = dono
        pelo = 'peludo'

    def comer(self):
        print('Nhom nhom')

class Gato(Animal):
    def __init__ (self, nome, dono, raca):
        super().__init__(nome, dono)
        self.raca = raca
    
        

    def miar(self):
        print('Miiiaauuuuu')



obj_animal = Animal('Rex', 'Matheus')
obj_gato = Gato('Sr. Botas', 'Eu', 'Siamês')

obj_gato.miar()
print(obj_gato.nome)
print(obj_gato.dono)
print(obj_gato.raca)