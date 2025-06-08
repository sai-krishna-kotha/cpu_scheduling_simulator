def fcfs(pids, arrivals, bursts):
    n = len(pids)
    processes = [{'pid':pids[i], 'at':arrivals[i], 'bt':bursts[i]} for i in range(n)]
    processes.sort(key=lambda x: x['at'])
    curr = 0
    avg_tat = 0
    avg_wt = 0
    for p in processes:
        if curr < p['at']:
            curr = p['at']
        p['ct'] = curr + p['bt']
        p['tat'] = (p['ct'] - p['at']) 
        p['wt'] = (p['tat'] - p['bt'])
        curr = p['ct']
        avg_tat += p['tat']
        avg_wt += p['wt']
    avg_tat = f'{avg_tat/n :0.3f}'
    avg_wt = f'{avg_wt/n :0.3f}'
    return {
        'processes': processes,
        'avg-tat' : avg_tat,
        'avg-wt' : avg_wt
    }