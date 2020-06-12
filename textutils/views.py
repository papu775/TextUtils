# I have created this file -papu
from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def analyze(request):
    # Ger the text
    djtext = request.POST.get('txt')
    # Check Checkbox value
    removepunc = request.POST.get('removepunc', "off")
    fullcaps = request.POST.get('fullcaps', "off")
    newlineremover = request.POST.get('newlineremover', "off")
    extraspaceremover = request.POST.get('extraspaceremover', "off")
    charcount = request.POST.get('charcount', 'off')
    punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
    # Check Checkbox value on
    if removepunc == 'on':
        analyzed = ""  
        for char in djtext:
            if char not in punctuations:
                analyzed += char
        params = {'purpose': 'Removed Punctuations', 'analyzed_text': analyzed}
        djtext = analyzed
     

    if fullcaps == 'on':
        analyzed = ""
        for char in djtext:
            analyzed += char.upper()
        params = {'purpose': 'Change To Upper Case', 'analyzed_text': analyzed}
        djtext = analyzed
       

    if newlineremover == 'on':
        analyzed = ""
        for char in djtext :
            if char != '\n' and char!="\r":
                analyzed += char
        params = {'purpose': 'New Line Remove', 'analyzed_text': analyzed}
        djtext = analyzed
    

    if extraspaceremover == 'on':
        analyzed = ""
        for index, char in enumerate(djtext):
            if not(djtext[index] == '' and djtext[index+1] == ''):
                analyzed += char
        params = {'purpose': 'Extra Space Remove', 'analyzed_text': analyzed}

    if (removepunc != 'on' and fullcaps != 'on' and newlineremover != 'on' and extraspaceremover != 'on'):
        return HttpResponse("Please select operations")

    return render(request, 'analyzetext.html',params)
    
