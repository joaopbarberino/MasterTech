from django.shortcuts import render
from dia03app.models import Filme
# Create your views here.
def catalogo_view(request):
    filmes = Filme.objects.all()

    contexto = {
        'filmes': filmes
    }
    return render(request, 'catalogo.html', contexto)