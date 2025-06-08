from django.shortcuts import render,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
from .scheduler_algos import fcfs
# Create your views here.

# @csrf_exempt
def home(request):
    return render(request, 'simulator/home.html')
def get_result(request):
    if request.method == "POST":
        # print(request)
        data = json.loads(request.body)
        pids = data.get('pids')
        ats = list(map(int, data.get('arrival_times')))
        bts = list(map(int, data.get('burst_times')))
        results = convert_to_json(fcfs(pids, ats, bts))
        # print(f'{data}\n{pids}\n{ats}\n{bts}')
        # return render(request, "simulator/home.html", {"results": results})
        return JsonResponse({'results':results})

def convert_to_json(data):
    print(data)
    processes = data['processes']
    n = len(processes)
    json_data = {
        'pids' : [p['pid'] for p in processes ],
        'arrival_times' : [p['at'] for p in processes],
        'burst_times' : [p['bt'] for p in processes],
        'completion_times' : [p['ct'] for p in processes],
        'turn_around_times' : [p['tat'] for p in processes],
        'waiting_times' : [p['wt'] for p in processes],
        'avg_tat' : data['avg-tat'],
        'avg_wt' : data['avg-wt'],
    }
    return json_data